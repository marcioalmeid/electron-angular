URL_TO_PUBLISH="http://mam:3030/upload"
TOKEN='TOKEN'
DIR="release/"
PACKAGE_NAME=`node --eval="process.stdout.write(require('./package.json').name)"`
PACKAGE_VERSION=`node --eval="process.stdout.write(require('./package.json').version)"`  
INSTALLER_NAME="$PACKAGE_NAME Setup $PACKAGE_VERSION.exe"
LATEST_FILE="latest.yml"

BLOCKMAP="$INSTALLER_NAME.blockmap" 
echo "$DIR$INSTALLER_NAME" 
echo $DIR$BLOCKMAP
echo $DIR$LATEST_FILE

curl -X POST -H "Authorization: $TOKEN" -F "File=@$DIR$INSTALLER_NAME" $URL_TO_PUBLISH
curl -X POST -H "Authorization: $TOKEN" -F "File=@$DIR$BLOCKMAP" $URL_TO_PUBLISH
curl -X POST -H "Authorization: $TOKEN" -F "File=@$DIR$LATEST_FILE" $URL_TO_PUBLISH