source .env
cargo watch -c --poll -x 'make --makefile Test.toml -- run_tests'
