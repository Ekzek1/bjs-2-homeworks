function cachingDecoratorNew(func) {
  let cache = []
  function wrapper(...args){
      const hash = args.join(',');
      let idx = cache.findIndex((item) => item.hash === hash);
      if (idx !== -1){
          console.log("Из кэша: " + cache[idx].value);
          return `Из кеша ${cache[idx].value}` 
      }

      let result = func(...args);
      cache.push({hash: hash, value: result});

      if (cache.length > 5) {
          cache.shift();
          console.log(`удалил`)
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper
}

function debounceDecoratorNew (func,ms){
    let isDebounce = false
    let timeout

    function wrapper (...arg){
        clearTimeout(timeout)

        timeout = setTimeout(function() {
            func.apply(this, arg);
        },ms)

        if(!isDebounce){
            func.apply(this, arg);
            isDebounce = true
        }
    }
    return wrapper
}


function debounceDecorator2(func,ms){
    let isDebounce = false
    let timeout

    function wrapper (...arg){
        clearTimeout(timeout)

        timeout = setTimeout(function() {
            func.apply(this, arg);
            wrapper.count += 1;
        },ms)

        if(!isDebounce){
            func.apply(this, arg);
            isDebounce = true
            wrapper.count += 1;
        }
    }

  wrapper.count = 0
  return wrapper
}

