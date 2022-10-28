export let API: string

if (process.env.NODE_ENV === "dev") {
    API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else if(process.env.NODE_ENV === "proc") {
    API = process.env.REACT_APP_PRODUCTION_API_URL!
}