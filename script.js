
$(document).ready(function() {
  
    $(function() {
        $("#my_date_picker1").datepicker({dateFormat: 'dd/mm/yy'});
    });

    $(function() {
        $("#my_date_picker2").datepicker({dateFormat: 'dd/mm/yy'});
    });

    $(function(){
        $("#my_date_picker3").datepicker({dateFormat: 'dd/mm/yy'});
    });

    $('#my_date_picker1').change(function() {
        startDate = $(this).datepicker('getDate');
        $("#my_date_picker2").datepicker("option", "minDate", startDate);
    })

    $('#my_date_picker2').change(function() {
        endDate = $(this).datepicker('getDate');
        $("#my_date_picker1").datepicker("option", "maxDate", endDate);
    })

    $('#my_date_picker3').change(function() {
        actualDate = $ (this).datepicker('getDate');
        startDate = $("#my_date_picker1").datepicker('getDate');
        endDate = $("#my_date_picker2").datepicker('getDate');
        // $("#my_date_picker1").datepicker("option", "", actualDate);
        if (actualDate < startDate) {
            $(this).datepicker("setDate", startDate);
          } else if (actualDate > endDate) {
            $(this).datepicker("setDate", endDate);
          }
    })
})

$('.calcular').on('click', function() {
    const startDate = $('#my_date_picker1').datepicker('getDate');
    const endDate = $('#my_date_picker2').datepicker('getDate');
    const actualDate = $('#my_date_picker3').datepicker('getDate');
    const contratados = parseInt($('#contratados').val());
    const entregues = parseInt($('#entregues').val());
    const totalDias = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const media = contratados / totalDias;
    const diasPassados = Math.round((actualDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const objetivo = Math.round(media * diasPassados);
    const entreguesAcumulados = entregues - objetivo;
    let textarea = document.getElementById('email');
    let modeloEmail = `Boa tarde a todos!, \n\nVerificamos em nosso dashboard que as entregas estão abaixo do contratado. Poderiam, por gentileza, verificar? \n\nQualquer dúvida estou a disposição,\nAbs.`;
        
    if (objetivo > entregues) {
        alert(`Você está abaixo da média de entregas. Média: ${media.toLocaleString('pt-BR')}, Objetivo: ${objetivo.toLocaleString('pt-BR')}`);
        textarea.innerHTML = modeloEmail;
    } else {
        alert(`Você está acima da média de entregas. Média: ${media.toLocaleString('pt-BR')}, Objetivo: ${objetivo.toLocaleString('pt-BR')}`);
    }
    $('#contratados').val('');
    $('#entregues').val('');
});


async function clipboardCopy() {
    let text = document.querySelector("#email").value;
    await navigator.clipboard.writeText(text);
  }
  
  document.getElementById('copy').addEventListener('click', clipboardCopy);
  




const lightmode = document.getElementById('button');
const card = document.getElementById('card');
const bg = document.getElementById("black");
lightmode.addEventListener('click', function() {
    console.log("Foi pressionado!");
    card.classList.toggle("light-mode");
});
lightmode.addEventListener('click', function() {
    bg.classList.toggle("dark-mode");
});
