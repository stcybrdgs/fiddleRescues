const testObj = {
  w2: {
    element_index: '2',
    w2_p1: {
      element_index: '2.1',
      w2_p1_miscl: 'miscl',
      w2_p1_f2: {
        element_index: '2.1.1',
        w2_p1_f2_miscl: 'miscl',
      },
      w2_p1_f1: {
        element_index: '2.1.2',
        w2_p1_f1_miscl: 'miscl',
      },
    },
    w2_p2: {
      element_index: '2.2',
      w2_p2_miscl: 'miscl',
      w2_p2_f2: {
        element_index: '2.2.1',
        w2_p2_f1_miscl: 'miscl',
      },
      w2_p2_f1: {
        element_index: '2.2.2',
        w2_p2_f2_miscl: 'miscl',
      },
    },
  },
  w1: {
    element_index: '3',
    w1_p1: {
      element_index: '3.2',
      w1_p1_miscl: 'miscl',
      w1_p1_f2: {
        element_index: '3.2.1',
        w1_p1_f2_miscl: 'miscl',
      },
      w1_p1_f1: {
        element_index: '3.2.2',
        w1_p1_f1_miscl: 'miscl',
      },
    },
    w1_p2: {
      element_index: '3.3',
      w1_p2_miscl: 'miscl',
      w1_p2_f2: {
        element_index: '3.3.1',
        w1_p2_f2_miscl: 'miscl',
      },
      w1_p2_f1: {
        element_index: '3.3.2',
        w1_p2_f1_miscl: 'miscl',
      },
    },
  },
}

/*
 * @param obj The object from which props are being deleted
 * @param keys An array of props to be removed
 */
function deepDeleteObjProps(obj, props) {
  let index
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      index = props.indexOf(prop)
      if (index >= 0) {
        delete obj[prop]
      } else {
        if (typeof obj[prop] === 'object') {
          deepDeleteObjProps(obj[prop], props)
        }
      }
    }
  }
}

const copyObj = JSON.parse(JSON.stringify(testObj))
deepDeleteObjProps(copyObj, ['element_index'])
console.log('testObj: ', testObj)
console.log('copyObj: ', copyObj)
