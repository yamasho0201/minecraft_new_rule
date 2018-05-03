#read variable.csv
r = open('../variable.csv','r').readlines()

w = open('../variable.js','w')

w.write('var item_name = new Array();\n')
w.write('var item_id = new Array();\n')
w.write('var bikou = new Array();\n')
w.write('var item_icon = new Array();\n')
w.write('var item_score = new Array();\n')
w.write('var item_get_score = new Array();\n')

for i in range(1, len(r)):
    input = r[i].split(',')
    w.write("item_name[{}] = '{}';\n".format(i-1, input[0]))
    w.write("item_id[{}] = '{}';\n".format(i-1, input[2]))
    w.write("item_icon[{}] = '{}';\n".format(i-1, input[1]))
    w.write("bikou[{}] = '{}';\n".format(i-1, input[3].split('\n')[0]))
    w.write("item_score[{}] = {};\n".format(i-1, input[4]))
    w.write("item_get_score[{}] = {};\n".format(i-1, input[5]))
w.close()
