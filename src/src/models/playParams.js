class PlayParams {
  constructor(
    startMusic,
    play,
    notes,
    playMusic,
    valueFunc,
    stopMusic,
    BPM,
    playExtra
  ) {
    if (!BPM) BPM = 70;
    this.startMusic = startMusic;
    this.play = play;
    this.playMusic = playMusic;
    this.valueFunc = valueFunc;
    this.stopMusic = stopMusic;
    this.notes = notes;
    this.barTime = 60000 / BPM;
    this.BPM = BPM;
    this.playExtra = playExtra;
  }
}

export default PlayParams;
