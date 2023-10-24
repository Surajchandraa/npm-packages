

function strength(password) {
  
    const criteria = [
        { pattern: /[a-z]/, weight: 1 },  
        { pattern: /[A-Z]/, weight: 1 },  
        { pattern: /\d/, weight: 1 },     
        { pattern: /[!@#$%^&*(),.?":{}|<>]/, weight: 1 },  
        { pattern: /.{8,}/, weight: 2 }  
    ];

    let score = 0;

    criteria.forEach(criterion => {
        if (criterion.pattern.test(password)) {
            score += criterion.weight;
        }
    });

   
    const percentage = (score / 7) * 100;
    return Math.min(100, Math.floor(percentage));
}


module.exports=strength