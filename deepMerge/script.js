// use reduce with old theme as initial value.
// old plan value replaces new plan value
// if string, num, bool, but merges if
// object or array
// while any new props are added
const oldPlan = {
  wf1: {
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
          test: 'test',
          min: 13,
          read_only: false,
          groups: ['2', '3'],
        },
      },
    },
  },
}

const overridesPlan = {
  wf1: {
    proto1: {
      field1: {
        tags: ['override tag'],
        meta: {
          onchange: '{{ False }}',
        },
      },
    },
  },
  wf2: {
    proto2: {
      field2: {
        name: 'name-override-EDITED',
        value: false,
        tags: ['test'],
        meta: {
          groups: ['one'],
          uom: 'mm2',
          max: 22,
          min: 16,
          required: false,
        },
      },
    },
  },
}

function computedOverrides(...objects) {
  const isObj = (obj) => obj && typeof obj === 'object'

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal)
      } else if (isObj(pVal) && isObj(oVal)) {
        prev[key] = computedOverrides(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}

let computed = computedOverrides(oldPlan, overridesPlan)

document.getElementById('console').innerHTML = JSON.stringify(computed)

