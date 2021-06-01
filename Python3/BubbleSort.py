i=0
j=0
data = [54,78,12,2,89,25,78,29,69,35]

print(data)

for i in range(0,len(data)-1):
    for j in range(0,(len(data)-i)-1):
        if(data[j]>data[j+1]):
            tmp = data[j]
            data[j] = data[j+1]
            data[j+1] = tmp

print(data)

