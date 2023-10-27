function row1check() {
  let c11 = document.getElementById("11");
  if (c11.checked == true) {
    let row1 = document.getElementsByClassName("row1");
    for (let i = 0; i < row1.length; i++) {
      row1[i].checked = true;
    }
  }
}

function row2check() {
  let c12 = document.getElementById("21");
  if (c12.checked == true) {
    let row2 = document.getElementsByClassName("row2");
    for (let i = 0; i < row2.length; i++) {
      row2[i].checked = true;
    }
  }
}

function row3check() {
  let c13 = document.getElementById("31");
  if (c13.checked == true) {
    let row3 = document.getElementsByClassName("row3");
    for (let i = 0; i < row3.length; i++) {
      row3[i].checked = true;
    }
  }
}

function row4check() {
  let c14 = document.getElementById("41");
  if (c14.checked == true) {
    let row4 = document.getElementsByClassName("row4");
    for (let i = 0; i < row4.length; i++) {
      row4[i].checked = true;
    }
  }
}

function col2check() {
  let c12 = document.getElementById("12");
  if (c12.checked == true) {
    let col2 = document.getElementsByClassName("col2");
    for (let i = 0; i < col2.length; i++) {
      col2[i].checked = true;
    }
  }
}

function col3check() {
  let c13 = document.getElementById("13");
  if (c13.checked == true) {
    let col3 = document.getElementsByClassName("col3");
    for (let i = 0; i < col3.length; i++) {
      col3[i].checked = true;
    }
  }
}

function col4check() {
  let c14 = document.getElementById("14");
  if (c14.checked == true) {
    let col4 = document.getElementsByClassName("col4");
    for (let i = 0; i < col4.length; i++) {
      col4[i].checked = true;
    }
  }
}

function col5check() {
  let c15 = document.getElementById("15");
  if (c15.checked == true) {
    let col5 = document.getElementsByClassName("col5");
    for (let i = 0; i < col5.length; i++) {
      col5[i].checked = true;
    }
  }
}

function allcheck() {
  let box = document.getElementById("55");
  if (box.checked == true) {
    let cb = document.getElementsByClassName("cb");
    for (let i = 0; i < cb.length; i++) {
      cb[i].checked = true;
    }
  }
}

function reset() {
  let box = document.getElementById("51");
  if (document.getElementById("51").checked == false) {
    let cb = document.getElementsByClassName("cb");
    for (let i = 0; i < cb.length; i++) {
      cb[i].checked = false;
    }
  }
}
