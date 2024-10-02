from flask import Flask, render_template, request
from flask import redirect
from flask import jsonify
import json



from flaskext.mysql import MySQL

app = Flask(__name__)

mysql = MySQL()


app.config['MYSQL_DATABASE_HOST'] 	  = 'localhost'
app.config['MYSQL_DATABASE_PORT'] 	  = 3306
app.config['MYSQL_DATABASE_USER'] 	  = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'pass_root'
app.config['MYSQL_DATABASE_DB'] 	  = 'db_university'


mysql.init_app(app)



app = Flask(__name__)


@app.route('/')
def index():
	return render_template('index.html')

@app.route('/api/data')
def doGetData1():

	data = {"anne":[], "datasets":[]}
	
	conn = mysql.connect()	
	cursor =conn.cursor()	
	cursor.execute("SELECT DISTINCT specialite FROM resultats")	

	spec_tuple = cursor.fetchall()
	spec_list =  [item[0] for item in spec_tuple]
		
	

	cursor.execute("SELECT DISTINCT annee FROM resultats")	

	annee_tuple = cursor.fetchall()
	annee_list =  [item[0] for item in annee_tuple]
	data["anne"]=annee_list

	
	for spec in spec_list:
		population_tuple =[]
		for annee in annee_list:
			cursor.execute("SELECT count(*) FROM resultats WHERE annee='"+str(annee)+"'"+"and specialite ='"+spec+"'")	
			popu = cursor.fetchall()
			population_tuple.append(popu[0])
			# print(population_tuple)
		population_list =  [item[0] for item in population_tuple]	
		data["datasets"].append({"label":spec, "data":population_list})	
	
	data_JSON = json.dumps(data)	
	return data_JSON 
	
	
@app.route('/api/data2')
def doGetData2():
	
	conn = mysql.connect()	
	cursor =conn.cursor()	

	cursor.execute("SELECT  annee,  count(*)  as num  FROM resultats  GROUP BY annee  ")	

	data = cursor.fetchall()	
	row_headers=[x[0] for x in cursor.description]

	cursor.close()

	json_data=[]
	for result in data:
		json_data.append(dict(zip(row_headers,result)))	
	return jsonify(json_data)

	
@app.route('/api/data3')
def doGetData3():
	
	conn = mysql.connect()	
	cursor =conn.cursor()	

	cursor.execute("SELECT  annee,  count(*)  as num  FROM resultats  WHERE moyenne>=10 GROUP BY annee desc ")	

	data = cursor.fetchall()	
	row_headers=[x[0] for x in cursor.description]

	cursor.close()

	json_data=[]
	for result in data:
		json_data.append(dict(zip(row_headers,result)))	
	return jsonify(json_data)



@app.route('/api/data4')
def doGetData4():
	
	data = {"anne":[], "datasets":[]}
	
	conn = mysql.connect()	
	cursor =conn.cursor()	
	cursor.execute("SELECT DISTINCT specialite FROM resultats")	

	spec_tuple = cursor.fetchall()
	spec_list =  [item[0] for item in spec_tuple]
		
	

	cursor.execute("SELECT DISTINCT annee FROM resultats")	

	annee_tuple = cursor.fetchall()
	annee_list =  [item[0] for item in annee_tuple]
	data["anne"]=annee_list

	
	for spec in spec_list:
		population_tuple =[]
		for annee in annee_list:
			cursor.execute("SELECT count(*) FROM resultats WHERE annee='"+str(annee)+"'"+"and specialite ='"+spec+"'and moyenne>=10")	
			popu = cursor.fetchall()
			population_tuple.append(popu[0])
			# print(population_tuple)
		population_list =  [item[0] for item in population_tuple]	
		data["datasets"].append({"label":spec, "data":population_list})	
	
	data_JSON = json.dumps(data)	
	return data_JSON 	

@app.route('/api/data5')
def doGetData5():
	
	data = {"anne":[], "datasets":[]}
	
	conn = mysql.connect()	
	cursor =conn.cursor()	
	cursor.execute("SELECT DISTINCT sexe FROM resultats")	

	spec_tuple = cursor.fetchall()
	spec_list =  [item[0] for item in spec_tuple]
		
	

	cursor.execute("SELECT DISTINCT annee FROM resultats")	

	annee_tuple = cursor.fetchall()
	annee_list =  [item[0] for item in annee_tuple]
	data["anne"]=annee_list

	
	for sx in spec_list:
		population_tuple =[]
		for annee in annee_list:
			cursor.execute("SELECT count(*) FROM resultats WHERE annee='"+str(annee)+"'"+"and sexe ='"+sx+"'and moyenne>=10")	
			popu = cursor.fetchall()
			population_tuple.append(popu[0])
			# print(population_tuple)
		population_list =  [item[0] for item in population_tuple]	
		data["datasets"].append({"label":sx, "data":population_list})	
	
	data_JSON = json.dumps(data)	
	return data_JSON 	


@app.route('/api/data6')
def doGetData6():
	
	conn = mysql.connect()	
	cursor =conn.cursor()	

	cursor.execute("SELECT  specialite ,  count(*)  as num  FROM resultats  GROUP BY specialite desc ")	

	data = cursor.fetchall()	
	row_headers=[x[0] for x in cursor.description]

	cursor.close()

	json_data=[]
	for result in data:
		json_data.append(dict(zip(row_headers,result)))	
	return jsonify(json_data)

@app.route('/api/data7')
def doGetData7():
	
	data = {"spec":[], "datasets":[]}
	
	conn = mysql.connect()	
	cursor =conn.cursor()	
	cursor.execute("SELECT DISTINCT specialite FROM resultats")	

	spec_tuple = cursor.fetchall()
	spec_list =  [item[0] for item in spec_tuple]
	data["spec"]=spec_list	

	cursor.execute("SELECT DISTINCT annee FROM resultats")	

	annee_tuple = cursor.fetchall()
	annee_list =  [item[0] for item in annee_tuple]


	
	for annee in annee_list:
		population_tuple =[]
		for spec in spec_list:
			cursor.execute("SELECT count(*) FROM resultats WHERE annee='"+str(annee)+"'"+"and specialite ='"+spec+"' and  sexe='H' ")	
			popu = cursor.fetchall()
			population_tuple.append(popu[0])
			# print(population_tuple)
		population_list =  [item[0] for item in population_tuple]	
		data["datasets"].append({"label":str(annee), "data":population_list})	
	
	data_JSON = json.dumps(data)	
	return data_JSON 
	


@app.route('/api/data8')
def doGetData8():
	
	data = {"spec":[], "datasets":[]}
	
	conn = mysql.connect()	
	cursor =conn.cursor()	
	cursor.execute("SELECT DISTINCT specialite FROM resultats")	

	spec_tuple = cursor.fetchall()
	spec_list =  [item[0] for item in spec_tuple]
	data["spec"]=spec_list	

	cursor.execute("SELECT DISTINCT annee FROM resultats")	

	annee_tuple = cursor.fetchall()
	annee_list =  [item[0] for item in annee_tuple]


	
	for annee in annee_list:
		population_tuple =[]
		for spec in spec_list:
			cursor.execute("SELECT count(*) FROM resultats WHERE annee='"+str(annee)+"'"+"and specialite ='"+spec+"' and  sexe='F' ")	
			popu = cursor.fetchall()
			population_tuple.append(popu[0])
			# print(population_tuple)
		population_list =  [item[0] for item in population_tuple]	
		data["datasets"].append({"label":str(annee), "data":population_list})	
	
	data_JSON = json.dumps(data)	
	return data_JSON 


@app.route('/api/dataNum')
def doGetDataN():
	
	numbers=[]

	conn = mysql.connect()	
	cursor =conn.cursor()	

	cursor.execute("SELECT count(*) FROM resultats")	
	nums = cursor.fetchall()
	numbers.append(nums[0][0])


	cursor.execute("SELECT count(*) FROM resultats where moyenne>=10")	
	numsR = cursor.fetchall()
	numbers.append(numsR[0][0])

	
	cursor.execute("SELECT count(*)  FROM (select DISTINCT specialite from resultats)sub")	
	spec = cursor.fetchall()
	numbers.append(spec[0][0])




	data_JSON = json.dumps(numbers)	
	return data_JSON 

if __name__ == '__main__':
	app.run(debug=True, port=5000)
	
	