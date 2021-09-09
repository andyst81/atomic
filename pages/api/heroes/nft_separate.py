import json
import csv


with open('tokens.csv') as csv_file:
	csv_reader = csv.DictReader(csv_file)
	line_count = 0
	

	for row in csv_reader:
		jsonoutput = open(f'{row["ID"]}.js', 'w')
		row["Image"] = row["Image"][7:]
		del row["Element_Sum"]
		del row["Group_Sum"]
		del row["BG_Sum"]
		del row["Frame_Sum"]
		del row["Left_Sum"]
		del row["Right_Sum"]
		del row["Items_Location"]
		del row["Items_Sum"]
		del row["Flavor_Sum"]
		del row["Flavor_Total"]
		del row["Stance_Sum"]
		del row["Stance_Total"]
		del row["Variation_Sum"]
		del row["Variation_Total"]
		out = json.dumps(row)

		jsonoutput.write("export default function handler (req, res) { res.status(200).json(")
		jsonoutput.write(out + ')}')

		line_count += 1

		jsonoutput.close()	
csv_file.close()
