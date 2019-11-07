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