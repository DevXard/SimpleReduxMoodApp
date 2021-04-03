
const mood = document.querySelector("#mood")
const cute = document.querySelector("#cute")
const gross = document.querySelector("#gross")
const happy = document.querySelector("#happy")
const confused = document.querySelector("#confused")
const state = store.getState()

mood.innerText = state.mood

cute.addEventListener('click', function(){
    
    store.dispatch({type: "CUTE", payload: "༼☯﹏☯༽"})
    mood.innerText = store.getState().mood
})

gross.addEventListener('click', function(){
    
    store.dispatch({type: "GROSS", payload: "۞_۞"})
    mood.innerText = store.getState().mood
})

happy.addEventListener('click', function(){
    
    store.dispatch({type: "HAPPY", payload: "＼(^_^)／"})
    mood.innerText = store.getState().mood
})

confused.addEventListener('click', function(){
    
    store.dispatch({type: "HAPPY", payload: "●.◉"})
    mood.innerText = store.getState().mood
})