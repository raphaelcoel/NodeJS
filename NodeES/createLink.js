export function createLink(dir, filename) {
    return `<a href="/${dir}/${filename}">${filename}</a><br>\n`;
}

export function voltar() {
    return `<a href="/">Voltar</a><br><br>\n`;
}

    module.exports = createLink