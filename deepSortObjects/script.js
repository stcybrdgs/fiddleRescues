function sortObject(object) {
  //Thanks > http://whitfin.io/sorting-object-recursively-node-jsjavascript/
  if (!object) {
    return object
  }

  const isArray = object instanceof Array
  var sortedObj = {}
  if (isArray) {
    sortedObj = object.map((item) => sortObject(item))
  } else {
    var keys = Object.keys(object)
    // console.log(keys);
    keys.sort(function (key1, key2) {
      ;(key1 = key1.toLowerCase()), (key2 = key2.toLowerCase())
      if (key1 < key2) return -1
      if (key1 > key2) return 1
      return 0
    })

    for (var index in keys) {
      var key = keys[index]
      if (typeof object[key] == 'object') {
        sortedObj[key] = sortObject(object[key])
      } else {
        sortedObj[key] = object[key]
      }
    }
  }

  return sortedObj
}

let obj = {
  wf4: {
    proto1: {
      field1: {
        name: 'name3',
        value: true,
        meta: {
          uom: 'mm1',
          max: 11,
        },
      },
    },
  },
  wf1: {
    proto2: {
      field3: {
        name: 'name3',
        value: true,
        meta: {
          uom: 'mm1',
          max: 11,
        },
      },
      field2: {
        name: 'name1',
        value: true,
        meta: {
          uom: 'mm1',
          max: 11,
        },
      },
    },
    proto1: {
      field1: {
        name: 'name1',
        value: true,
        meta: {
          uom: 'mm1',
          max: 11,
        },
      },
    },
  },
  wf2: {
    proto2: {
      field2: {
        name: 'name2',
        value: true,
        meta: {
          uom: 'mm2',
          max: 22,
          test: 'test',
          min: 13,
          read_only: false,
          groups: ['2', '3'],
        },
      },
    },
  },
}
document.getElementById('print').innerHTML = JSON.stringify(sortObject(obj))
console.log(sortObject(obj))
