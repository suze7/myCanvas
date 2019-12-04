function createShaderFromScript(gl, type, name) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, document.querySelector(`#${name}`).innerHTML);
    gl.compileShader(shader);

    return shader;
}

function createProgram(gl, vShader, fShader) {
    let program = gl.createProgram();
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);
    return program;
}

function randomColor() {
    return [Math.random(), Math.random(), Math.random(), Math.random()];
}