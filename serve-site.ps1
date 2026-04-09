param(
  [int]$Port = 4173
)

$ErrorActionPreference = "Stop"

function Get-ContentType([string]$Path) {
  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    ".html" { return "text/html; charset=utf-8" }
    ".js" { return "application/javascript; charset=utf-8" }
    ".jsx" { return "text/plain; charset=utf-8" }
    ".css" { return "text/css; charset=utf-8" }
    ".json" { return "application/json; charset=utf-8" }
    ".svg" { return "image/svg+xml" }
    ".png" { return "image/png" }
    ".jpg" { return "image/jpeg" }
    ".jpeg" { return "image/jpeg" }
    ".webp" { return "image/webp" }
    default { return "application/octet-stream" }
  }
}

function Write-Response($Stream, [int]$StatusCode, [string]$StatusText, [string]$ContentType, [byte[]]$Body) {
  $header = @(
    "HTTP/1.1 $StatusCode $StatusText"
    "Content-Type: $ContentType"
    "Content-Length: $($Body.Length)"
    "Cache-Control: no-cache, no-store, must-revalidate"
    "Connection: close"
    ""
    ""
  ) -join "`r`n"

  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  $Stream.Write($Body, 0, $Body.Length)
  $Stream.Flush()
}

$root = [System.IO.Path]::GetFullPath($PSScriptRoot)
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()

Write-Host "MGIMO Connect local server is running at http://localhost:$Port/"
Write-Host "Press Ctrl+C to stop."

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()

    try {
      $stream = $client.GetStream()
      $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
      $requestLine = $reader.ReadLine()

      while ($true) {
        $line = $reader.ReadLine()
        if ([string]::IsNullOrEmpty($line)) {
          break
        }
      }

      if ([string]::IsNullOrWhiteSpace($requestLine)) {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Bad request")
        Write-Response $stream 400 "Bad Request" "text/plain; charset=utf-8" $body
        continue
      }

      $parts = $requestLine.Split(" ")
      $rawPath = if ($parts.Length -ge 2) { $parts[1] } else { "/" }
      $relativePath = [System.Uri]::UnescapeDataString(($rawPath -split "\?")[0].TrimStart("/"))

      if ([string]::IsNullOrWhiteSpace($relativePath)) {
        $relativePath = "index.html"
      }

      $target = [System.IO.Path]::GetFullPath((Join-Path $root $relativePath))

      if (-not $target.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $target -PathType Leaf)) {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Not found")
        Write-Response $stream 404 "Not Found" "text/plain; charset=utf-8" $body
        continue
      }

      $fileBytes = [System.IO.File]::ReadAllBytes($target)
      Write-Response $stream 200 "OK" (Get-ContentType $target) $fileBytes
    } finally {
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}
