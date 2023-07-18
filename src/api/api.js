const dataApi = {
    baseUrl:'https://api.themoviedb.org /3/',
    baseUrlw500:'https://image.tmdb.org/t/p/w500/',
}
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTdiYTkyNzI1ZDM1Yzg5NjhmM2UzYTViYzhiNGRhMSIsInN1YiI6IjY0OTRiOTlmYTI4NGViMDBlMmI2OTAzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ad_6X7S2yTpjQTJg8Iz4dKyjtj6hAOx_LcWXRdpNe8g'
    }
    };

export default { dataApi, options }