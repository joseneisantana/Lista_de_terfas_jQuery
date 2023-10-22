$(document).ready(function() {
    $('#adicionar-tarefa').click(function() {
      var textoTarefa = $('#nova-tarefa').val();
      if (textoTarefa.trim() !== '') {
        $('#lista-tarefas').append('<li>' + textoTarefa + '</li>');
        $('#nova-tarefa').val('');
      }
    });
  
    $('#lista-tarefas').on('click', 'li', function() {
      $(this).toggleClass('concluida');
    });
  });
  