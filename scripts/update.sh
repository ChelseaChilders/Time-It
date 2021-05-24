#!/bin/bash
HOST=`hostname -f`
VERSION="$(cat version)"

echo "Updating to version ${VERSION}..."
npm version ${VERSION} --allow-same-version --no-git-tag-version
