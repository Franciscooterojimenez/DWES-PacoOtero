function isSimilar(A,B,key=Object.keys(A),idx=0) {
	var a = Array.isArray(A);
	var b = Array.isArray(B);
	if (a != b) return false;
	if (a) return A.toString() == B.toString();
	if (Object.keys(A).toString() != Object.keys(B).toString()) return false;
	if (idx == key.length) return true;
	if (A[key[idx]] != B[key[idx]]) return false;
	return isSimilar(A,B,key,idx+1);
}