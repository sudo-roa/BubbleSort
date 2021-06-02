def bubble_sort(ary)
	length = ary.length
	for i in 0..(length-1)
		for j in 0..((length-2)-i)
			l = j
			r = j+1
			if ary[l] > ary[r]
				tmp = ary[l]
				ary[l] = ary[r]
				ary[r] = tmp
			end
		end
	end
	return ary
end

data = [54,78,12,2,89,25,78,29,69,35]
p data
p bubble_sort(data)
