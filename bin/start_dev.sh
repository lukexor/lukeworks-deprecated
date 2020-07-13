#!/bin/sh

tmux new-session -s 'Lukeworks Dev' \; \
  send-keys 'cd ~/dev/lukeworks && yarn start' C-m \; \
  split-window -h \; \
  send-keys 'cd ~/dev/lukeworks/src/server && source .env && cargo watch -c --poll -w src -x run' C-m \;
