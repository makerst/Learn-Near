import { logging, context } from 'near-sdk-as';

export function helloWorld(): string {
    logging.log("Contract start ")
    return "Hello World";
}