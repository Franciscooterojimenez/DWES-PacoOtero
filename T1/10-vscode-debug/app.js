export function createXmasTree(height) {
    let aux = 0;
    let tree = "";
    for(let i = 0; i < height; i++){
        tree += ' '.repeat(height - aux);
        tree += "*".repeat(aux);
        tree += "*";
        tree += "*".repeat(aux);
        tree += ' '.repeat(height - aux) + "\n";
        aux += 1;
    }
    tree += ' '.repeat(height);
    tree += "#"
    tree += ' '.repeat(height) + '\n';
    tree += ' '.repeat(height);
    tree += "#"
    tree += ' '.repeat(height);
    return tree;
  }