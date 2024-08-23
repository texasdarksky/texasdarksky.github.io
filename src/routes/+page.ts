import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getLineFromMetadata, metadataTimezone, data2json } from "$lib/utils";


let text: string;
let items: Array<String> = [];

export const load: PageLoad = async ({ fetch }) => {
    try {
        // const res = await fetch('/sqmdata/freeman/20231109_131602.dat');
        const res = await fetch('/sqmdata/freeman/20240306_131818_4.dat');
        text = await res.text();
        // console.log("Text:")
        // console.log(text);

        // items = text.split('\r\n');
        text = text.replace('\r', '');
        items = text.split('\n');
        // console.log("Items:")
        // console.log(items);

        let metadata = items.filter((value) => {
            let firstLetter = value.split('')[0];
            if (firstLetter === '#') {
                return value;
            }
        }).map((value) => {
            return value.slice(2).split(',');
        });
        // console.log("Metadata:")
        // console.log(metadata);
        
        const tz = metadataTimezone(getLineFromMetadata(metadata, 'Local timezone'));
        
        let data = items.filter((value) => {
            let firstLetter = value.split('')[0];
            if (firstLetter !== '#') {
                return value;
            }
        }).map((value) => {
            return value.split(';');
        });
        // console.log(data);

        let dataj = data2json(data, tz);
        console.log(dataj);
        // let areTheyErrors = dataj.filter(item => item.jd === 2460312);
        // console.log(areTheyErrors);
        
        return {
            dataj: dataj,
            metadata: metadata,
            timezone: tz
        }
    } catch (e) {
        throw error(404, "Could not find sqm file.");
    }
};