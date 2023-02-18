port="${PORT:-8787}"
kill -9 $(lsof -t -i:$port)
