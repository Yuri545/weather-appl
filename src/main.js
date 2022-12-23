import { DataForm } from "./ui/DataForm.js";
import { TemperaturesList } from "./ui/TemperaturesList.js";
import { WeatherDataProcessor } from "./data/WeatherDataProcessor.js";

const params = {idForm: "data_form", idDateFrom: "date_from", idDateTo: "date_to",
idHourFrom: "hour_from", idHourTo: "hour_to", idErrorMessage: "error_message"};
const weatherProcessor = new WeatherDataProcessor();
const dataForm = new DataForm(params);
const temperatureList = new TemperaturesList("items-list", "city");
dataForm.addHandler((dataFromForm) => {
    console.log(dataFromForm);
     const promiseData = weatherProcessor.getData(dataFromForm);
    
    promiseData.then(data => temperatureList.showTemperatures(data));
    
})

//Cw #27 ++

