var dinosaur = 'triceratops';
dinosaur = dinosaur.toUpperCase();
console.log(dinosaur);

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
text = text.replace('Velociraptor', dinosaur);

text = text.substr(0, text.length/2);
console.log(text);