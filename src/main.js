import { DataForm } from "./ui/DataForm.js";
import { TemperaturesList } from "./ui/TemperaturesList.js";
import { WeatherDataProcessor } from "./data/WeatherDataProcessor.js";


const weatherProcessor = new WeatherDataProcessor();
const params = {
    idForm: "data_form", idDateFrom: "date_from", idDateTo: "date_to",
    idHourFrom: "hour_from", idHourTo: "hour_to", idErrorMessage: "error_message",
    cities: weatherProcessor.getCities(),
     minMaxDates: weatherProcessor.getMinMaxDates(),
     idCities: "cities"
};
const dataForm = new DataForm(params);
const temperatureList = new TemperaturesList("items-list", "city");
dataForm.addHandler(async (dataFromForm) => {
    console.log(dataFromForm);
    const data = await weatherProcessor.getData(dataFromForm);
    temperatureList.showTemperatures(data);

})



