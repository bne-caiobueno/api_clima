

async function Pesquisar_clima(){
    const cidade = document.getElementById("input_cidade").value;

    const apikey = "47c7dbb1fd1a317ec4359ef78cb8e347";

    resposta = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${apikey}`)
    const localizacao = await resposta.json();

    document.getElementById("mapa_container").innerHTML = `<iframe width="400px" height="300px" id="mapa" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=pt-br&amp;coord=${localizacao[0].lat}, ${localizacao[0].lon}&amp;q=${cidade}&amp;ie=UTF8&amp;t=&amp;z=11&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br />`;

    resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${localizacao[0].lat}&lon=${localizacao[0].lon}&appid=${apikey}&lang=pt_br&units=metric`)
    const temperatura = await resposta.json();

    console.log(temperatura)

    document.getElementById("temperatura_atual").innerText = `Temp. atual: ${temperatura.main.temp}ºC`;
    document.getElementById("temperatura_previsao").innerText = `Variação Máx.: ${temperatura.main.temp_max}ºC / Variação Mín.: ${temperatura.main.temp_min}ºC`;
    document.getElementById("umidade").innerText = `Umidade: ${temperatura.main.humidity}%`;
}
