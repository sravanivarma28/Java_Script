
function step1(){

    setTimeout(() => {
        console.log('step 1 done')

        setTimeout(() => {
            console.log('step 2 done')

            setTimeout(() => {
                console.log('step 3 done')

                setTimeout(() => {
                    console.log('step 4 done')

                    setTimeout(() => {
                        console.log('step 5 done')
                    }, 1000);

                }, 1000);

            }, 2000);
        }, 2000);
    }, 2000);

}
step1()