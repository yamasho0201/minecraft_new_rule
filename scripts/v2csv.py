r = open('variable.js','r').readlines()
o = open('../variable.csv','w')

o.write("name,icon,id,bikou,score")
o.write("\n")
for i in range(307):
    name = r[5 + 4*i].split("'")[1]
    icon = r[5 + 4*i +2].split("'")[1]
    id   = r[5 + 4*i +1].split("'")[1]
    bikou= r[5 + 4*i +3].split("'")[1]
    o.write("{},{},{},{}".format(name,icon,id,bikou))
    o.write("\n")
o.close()
