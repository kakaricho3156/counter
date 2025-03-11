(()=>{
  const $counter=document.getElementById("js-counter");
  const $message = document.getElementById("message");

  const clickHandler=() => {
    $counter.textContent=0;
    $message.textContent="始めようか";
  }
  document.getElementById("js-reset-button").addEventListener("click",clickHandler);
})();