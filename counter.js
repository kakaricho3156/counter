(() => {
  const $counter = document.getElementById("js-counter");
  const $message = document.getElementById("message");

  const updateMessage = () => {
    let currentNumber = parseInt($counter.textContent);
    if(currentNumber <0) {
      $message.textContent = "+にして！";
    }else if(currentNumber===0){
      $message.textContent="始めようか"

    }
    else if (currentNumber <= 10 && currentNumber>= 1) {
      $message.textContent = "これから頑張ろう！";
    } else if (currentNumber <= 50 && currentNumber > 10) {
      $message.textContent = "いいね！";
    } else if (currentNumber <= 100 && currentNumber>50) {
      $message.textContent = "すごくいいね！";
    } else if (currentNumber <=500 && currentNumber >100) {
      $message.textContent = "マジでいいね！";
    } else {
      $message.textContent = "いうことなし！";
    }
  };

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    console.log($targetButton);
    let currentCount = parseInt($counter.textContent);
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else if ($targetButton.textContent === "+100") {
      $counter.textContent = currentCount + 100;
    } else if ($targetButton.textContent === "+10") {
      $counter.textContent = currentCount + 10;
    } else if ($targetButton.textContent === "-10") {
      $counter.textContent = currentCount - 10;
    } else if ($targetButton.textContent === "-100") {
      $counter.textContent = currentCount - 100;
    } else {
      $counter.textContent = currentCount - 1;
    }
    updateMessage();
  };
  for (
    let index = 0;
    index < document.getElementsByClassName("js-button").length;
    index++
  ) {
    document
      .getElementsByClassName("js-button")
      [index].addEventListener("click", (e) => clickHandler(e));
  }
})();
