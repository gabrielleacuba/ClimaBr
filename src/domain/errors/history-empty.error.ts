export class HistoryEmpty extends Error{
  constructor(){
    super('Nenhuma cidade no histórico!');
    super.name = 'HistoryEmpty';
  }
}