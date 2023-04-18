save()
{
  const a = document.createElement('a');
  const b = new Blob([JSON.strigify("")]);
  a.href = URL.createObjectURL(b);
  a.download = 'test';
  a.click();
  console.log();
}

save();
