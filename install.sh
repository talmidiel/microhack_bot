#! /bin/sh

mkdir db && touch db/dailyMessage.json
mkdir logs && touch logs/process.log && touch logs/errors.logs

printf '{\n  "messages": [\n    "this is the microhack default message, please custommize it and add more inside your db/dailyMessage file"\n}' >> db/dailyMessage.json

echo 'please fill in your bot token :'
read token

echo 'please fill in your server status channel'
read statusChannel

touch config.json
printf "{\n  \"token\": \"$token\",\n  \"statusChannel\": \"$statusChannel\"," >> config.json

echo 'would you like to activate debugg mode ? (yes/no)'

read debugg_mode

case $debugg_mode in
  'yes')
    printf '\n  "debugMode": true\n}' >> config.json
    ;;
  'no')
    printf '\n  "debugMode": false\n}' >> config.json
    ;;
  *)
    printf 'wrong argument, please type either yes or no'
    ;;
esac

npm install
