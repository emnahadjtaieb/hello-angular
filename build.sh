#!/bin/sh

ng build

find docs -type f | xargs sed -i "s/\"\/assets/\"\/hello-angular\/assets/g"

sed -i 's/runtime/hello-angular\/runtime/g' docs/index.html
sed -i 's/polyfills/hello-angular\/polyfills/g' docs/index.html
sed -i 's/scripts/hello-angular\/scripts/g' docs/index.html
sed -i 's/main/hello-angular\/main/g' docs/index.html
sed -i 's/styles\./hello-angular\/styles\./g' docs/index.html
sed -i 's/favicon/hello-angular\/favicon/g' docs/index.html