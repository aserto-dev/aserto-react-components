OUTPUT=$(yarn --silent ts-prune --ignore 'src/(factories|stories|types|.*\.js)' | grep -v 'Props (used in module)')

if [ "$OUTPUT" != "" ]; then
    echo $OUTPUT
    exit 1
fi
