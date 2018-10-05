    
function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var comments = form.comments;
    

    var name = elements.name.value;
    console.log('name', name);

    var comments = elements.comments.value;
    console.log('comments', comments)

}