#!/bin/bash
export USE_CUSTOM_DOMAIN=true
npm run build > /tmp/build.log 2>&1
grep -o 'src="[^"]*hien[^"]*"' out/index.html
