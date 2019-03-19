touch src/main.rs
cargo clippy --all-features -- \
    -D clippy::all \
    -D clippy::pedantic \
    -W clippy::nursery \
    -D clippy::wildcard_dependencies
