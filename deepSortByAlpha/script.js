dfunction deepSortAlphabetical(obj) {
    if (!obj) {
      return obj
    }
    const isArray = obj instanceof Array
    var sorted = {}
    if (isArray) {
      // recursively sort array of objects
      if (typeof obj[0] === 'object') {
        sorted = obj.map((item) => deepSort(item))
      } else {
        return obj // do not sort string array (ie, tags)
      }
    } else {
      var keys = Object.keys(obj)
      keys.sort(function(key1, key2) {
        // rem: use of caps alters the sorting, so use lowercase
        key1 = key1.toLowerCase()
        key2 = key2.toLowerCase()
        if (key1 < key2) return -1
        if (key1 > key2) return 1
        return 0
      })
  
      for (var index in keys) {
        var key = keys[index]
        if (typeof obj[key] === 'object') {
          sorted[key] = deepSort(obj[key])
        } else {
          sorted[key] = obj[key]
        }
      }
    }
    return sorted
  }