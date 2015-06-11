walk(document.body);


function walk(node) 
{
	//this is heavily based on the cloud to butt extension
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function handleText(textNode) 
{

	var v = textNode.nodeValue;
	v = v.replace(/\ba gente\b/g, "agente");
	v = v.replace(/\bnós\b/g, "nois");
	v = v.replace(/\bpra mim\b/g, "preu");
	v = v.replace(/\bpra eu\b/g, "preu");
	v = v.replace(/\bmenos\b/g, "menas");
	v = v.replace(/\bnegócio\b/g, "trem");
	v = v.replace(/!/g, ", sô!");
	v = v.replace(/\bigual\b/g, "quiném");
	v = v.replace(/\bhoje\b/g, "oje");
	v = v.replace(/\bmaior\b/g, "mais grande");
	v = v.replace(/\bmenor\b/g, "mais pequeno");


	v = v.replace(/\bA gente\b/g, "Agente");
	v = v.replace(/\bNós\b/g, "Nois");
	v = v.replace(/\bPra mim\b/g, "Preu");
	v = v.replace(/\bPra eu\b/g, "Preu");
	v = v.replace(/\bMenos\b/g, "Menas");
	v = v.replace(/\bNegócio\b/g, "Trem");
	v = v.replace(/!/g, ", sô!");
	v = v.replace(/\bIgual\b/g, "Quiném");
	v = v.replace(/\bHoje\b/g, "Oje");
	v = v.replace(/\bMaior\b/g, "Mais grande");
	v = v.replace(/\bMenor\b/g, "Mais pequeno");

	
	textNode.nodeValue = v;
}




