export const playNotificationSound = () => {
  const context = new AudioContext();
  const notes = [523.25, 659.25, 783.99];
  
  notes.forEach((freq, index) => {
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.frequency.value = freq;
    oscillator.type = 'sine';
    
    const startTime = context.currentTime + (index * 0.1);
    gainNode.gain.setValueAtTime(0.2, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.5);
  });
};

export const playAchievementSound = () => {
  const context = new AudioContext();
  const notes = [523.25, 659.25, 783.99, 1046.50];
  
  notes.forEach((freq, index) => {
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.frequency.value = freq;
    oscillator.type = 'triangle';
    
    const startTime = context.currentTime + (index * 0.08);
    gainNode.gain.setValueAtTime(0.15, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.4);
  });
};