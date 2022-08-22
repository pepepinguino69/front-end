const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer"
}

let fields=Object.keys(user);
user[fields[0]]='pepe'
console.log(user)

let retval = []
$('.card-header').each(function(){
  retval.push($(this).attr('id'))
})
 console.log(retval)
