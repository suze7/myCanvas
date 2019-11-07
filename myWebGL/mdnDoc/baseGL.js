function createShaderFromScript(gl, type, id) {
  let shaderSource = document.querySelector(`#${id}`).innerHTML;
  // 创建顶点着色器对象
  let shader = gl.createShader(type);
  // 将源码分配给顶点着色器对象
  gl.shaderSource(shader, shaderSource);
  // 编译顶点着色器程序
  gl.compileShader(shader);
  return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
  let program = gl.createProgram();
  //将顶点着色器挂载在着色器程序上。
  gl.attachShader(program, vertexShader);
  //将片元着色器挂载在着色器程序上。
  gl.attachShader(program, fragmentShader);
  //链接着色器程序
  gl.linkProgram(program);
  return program;
}

function randomColor() {
  const random = Math.random
  return {
    r: random() * 255,
    g: random() * 255,
    b: random() * 255,
    a: random() * 1
  };
}
// 创建圆的点
function createCircleVertex(x, y, radius, n) {
  const sin = Math.sin;
  const cos = Math.cos;
  var positions = [x, y, 255, 0, 0, 1];
  for (let i = 0; i <= n; i++) {
    var angle = i * Math.PI * 2 / n;
    positions.push(x + radius * sin(angle), y + radius * cos(angle), 255, 0, 0, 1);
  }
  return positions;
}
// 创建环形的positions数据
function createRingVertex(x, y, innerRadius, outerRadius, n) {
  const sin = Math.sin;
  const cos = Math.cos;
  var positions = [];
  var color = randomColor();
  for (var i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      color = randomColor();
    }
    var angle = i * Math.PI * 2 / n;
    positions.push(x + innerRadius * sin(angle), y + innerRadius * cos(angle), color.r, color.g, color.b, color.a);
    positions.push(x + outerRadius * sin(angle), y + outerRadius * cos(angle), color.r, color.g, color.b, color.a);
  }
  var indices = [];
  for (var i = 0; i < n; i++) {
    var p0 = i * 2;
    var p1 = i * 2 + 1;
    var p2 = (i + 1) * 2 + 1;
    var p3 = (i + 1) * 2;
    if (i == n - 1) {
      p2 = 1;
      p3 = 0;
    }
    indices.push(p0, p1, p2, p2, p3, p0);
  }
  return {
    positions: positions,
    indices: indices
  };
}