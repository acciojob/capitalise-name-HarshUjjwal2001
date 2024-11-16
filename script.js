//your JS code here. If required.
    if( str == null || str.length == 0)
    {
        return []
    }

    let ans = []
    let i = 0

    while(i < str.length)
    {
        let temp = str.slice(i,size + i)
        ans.push(temp)
        i += size
    }

    return ans

  }