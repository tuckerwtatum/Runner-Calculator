'use strict';

// Setting up object arrays for each running event.

var menEventOptions = {

	run5km: [779, 0.6062, 0.6602, 0.7102, 0.7562, 0.7982, 0.8362, 0.8702, 0.9002, 0.9262, 0.9482, 0.9662, 0.9802, 0.9922, 0.9996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9987, 0.997, 0.9947, 0.9918, 0.9882, 0.9839, 0.979, 0.9734, 0.9672, 0.9605, 0.9538, 0.9471, 0.9404, 0.9337, 0.927, 0.9203, 0.9136, 0.9069, 0.9002, 0.8935, 0.8868, 0.8801, 0.8734, 0.8667, 0.86, 0.8533, 0.8466, 0.8399, 0.8332, 0.8265, 0.8198, 0.8131, 0.8064, 0.7997, 0.793, 0.7863, 0.7796, 0.7729, 0.7662, 0.7592, 0.7515, 0.7433, 0.7344, 0.7249, 0.7147, 0.704, 0.6926, 0.6806, 0.668, 0.6547, 0.6408, 0.6263, 0.6112, 0.5955, 0.5791, 0.5621, 0.5445, 0.5262, 0.5074, 0.4879, 0.4678, 0.447, 0.4257, 0.4037, 0.3811, 0.3578, 0.334, 0.3095, 0.2844, 0.2586, 0.2323, 0.2053],
	run6km: [942, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9995, 0.9983, 0.9965, 0.994, 0.9908, 0.987, 0.9824, 0.9773, 0.9714, 0.9649, 0.958, 0.9511, 0.9442, 0.9373, 0.9304, 0.9235, 0.9166, 0.9096, 0.9027, 0.8958, 0.8889, 0.882, 0.8751, 0.8682, 0.8613, 0.8544, 0.8475, 0.8406, 0.8337, 0.8268, 0.8199, 0.813, 0.8061, 0.7992, 0.7923, 0.7854, 0.7785, 0.7715, 0.7646, 0.7577, 0.7501, 0.7419, 0.7331, 0.7237, 0.7136, 0.7028, 0.6915, 0.6795, 0.6668, 0.6535, 0.6396, 0.625, 0.6098, 0.594, 0.5775, 0.5604, 0.5427, 0.5243, 0.5052, 0.4856, 0.4653, 0.4443, 0.4228, 0.4005, 0.3777, 0.3542, 0.3301, 0.3053, 0.2799, 0.2538, 0.2272, 0.1998],
	run4Mile: [1014, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9987, 0.9971, 0.9948, 0.9918, 0.9881, 0.9837, 0.9787, 0.973, 0.9666, 0.9597, 0.9527, 0.9457, 0.9387, 0.9318, 0.9248, 0.9178, 0.9108, 0.9038, 0.8968, 0.8899, 0.8829, 0.8759, 0.8689, 0.8619, 0.8549, 0.8479, 0.841, 0.834, 0.827, 0.82, 0.813, 0.806, 0.7991, 0.7921, 0.7851, 0.7781, 0.7711, 0.7641, 0.7571, 0.7495, 0.7412, 0.7323, 0.7228, 0.7126, 0.7018, 0.6903, 0.6782, 0.6655, 0.6521, 0.6381, 0.6235, 0.6082, 0.5923, 0.5758, 0.5586, 0.5407, 0.5223, 0.5032, 0.4834, 0.463, 0.442, 0.4204, 0.3981, 0.3751, 0.3516, 0.3273, 0.3025, 0.277, 0.2509, 0.2241, 0.1967],
	run8km: [1272, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9986, 0.9968, 0.9944, 0.9913, 0.9874, 0.9829, 0.9777, 0.9719, 0.9653, 0.9581, 0.9509, 0.9436, 0.9364, 0.9292, 0.922, 0.9147, 0.9075, 0.9003, 0.893, 0.8858, 0.8786, 0.8714, 0.8641, 0.8569, 0.8497, 0.8424, 0.8352, 0.828, 0.8208, 0.8135, 0.8063, 0.7991, 0.7918, 0.7846, 0.7774, 0.7702, 0.7629, 0.7557, 0.7482, 0.7401, 0.7314, 0.722, 0.7119, 0.7012, 0.6899, 0.6779, 0.6653, 0.652, 0.638, 0.6235, 0.6082, 0.5923, 0.5758, 0.5586, 0.5408, 0.5223, 0.5032, 0.4835, 0.463, 0.442, 0.4203, 0.3979, 0.3749, 0.3512, 0.3269, 0.302, 0.2764, 0.2501, 0.2232, 0.1957],
	run5Mile: [1279, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9986, 0.9969, 0.9944, 0.9913, 0.9875, 0.983, 0.9778, 0.972, 0.9654, 0.9582, 0.951, 0.9438, 0.9365, 0.9293, 0.9221, 0.9148, 0.9076, 0.9004, 0.8931, 0.8859, 0.8787, 0.8714, 0.8642, 0.8569, 0.8497, 0.8425, 0.8352, 0.828, 0.8208, 0.8135, 0.8063, 0.7991, 0.7918, 0.7846, 0.7774, 0.7701, 0.7629, 0.7557, 0.7482, 0.7401, 0.7314, 0.722, 0.7119, 0.7012, 0.6899, 0.6779, 0.6653, 0.652, 0.638, 0.6235, 0.6082, 0.5924, 0.5758, 0.5587, 0.5409, 0.5224, 0.5033, 0.4835, 0.4631, 0.442, 0.4203, 0.398, 0.375, 0.3513, 0.327, 0.3021, 0.2765, 0.2502, 0.2234, 0.1958],
	run10km: [1603, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9996, 0.9984, 0.9966, 0.9941, 0.9908, 0.9869, 0.9822, 0.9769, 0.9708, 0.964, 0.9566, 0.9491, 0.9417, 0.9342, 0.9267, 0.9192, 0.9117, 0.9043, 0.8968, 0.8893, 0.8818, 0.8743, 0.8669, 0.8594, 0.8519, 0.8444, 0.8369, 0.8295, 0.822, 0.8145, 0.807, 0.7995, 0.7921, 0.7846, 0.7771, 0.7696, 0.7621, 0.7547, 0.7471, 0.7391, 0.7305, 0.7211, 0.7112, 0.7005, 0.6892, 0.6772, 0.6646, 0.6513, 0.6374, 0.6228, 0.6075, 0.5916, 0.575, 0.5577, 0.5398, 0.5213, 0.502, 0.4821, 0.4616, 0.4404, 0.4185, 0.396, 0.3728, 0.3489, 0.3244, 0.2993, 0.2734, 0.247, 0.2198, 0.192],
	run12km: [1942, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9838, 0.9786, 0.9727, 0.9662, 0.9589, 0.9513, 0.9438, 0.9362, 0.9287, 0.9211, 0.9136, 0.906, 0.8984, 0.8909, 0.8833, 0.8758, 0.8682, 0.8607, 0.8531, 0.8456, 0.838, 0.8305, 0.8229, 0.8154, 0.8078, 0.8003, 0.7927, 0.7852, 0.7776, 0.77, 0.7625, 0.7549, 0.7474, 0.7395, 0.731, 0.7218, 0.7119, 0.7013, 0.6901, 0.6782, 0.6656, 0.6524, 0.6385, 0.6239, 0.6087, 0.5928, 0.5762, 0.5589, 0.541, 0.5224, 0.5031, 0.4832, 0.4626, 0.4413, 0.4194, 0.3968, 0.3735, 0.3495, 0.3249, 0.2996, 0.2736, 0.247, 0.2197, 0.1917],
	run15km: [2455, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9994, 0.998, 0.996, 0.9932, 0.9898, 0.9856, 0.9807, 0.975, 0.9687, 0.9616, 0.954, 0.9464, 0.9387, 0.9311, 0.9235, 0.9158, 0.9082, 0.9005, 0.8929, 0.8852, 0.8776, 0.87, 0.8623, 0.8547, 0.847, 0.8394, 0.8317, 0.8241, 0.8165, 0.8088, 0.8012, 0.7935, 0.7859, 0.7782, 0.7706, 0.763, 0.7553, 0.7477, 0.7399, 0.7315, 0.7224, 0.7127, 0.7022, 0.6911, 0.6793, 0.6668, 0.6537, 0.6398, 0.6253, 0.6101, 0.5942, 0.5776, 0.5603, 0.5424, 0.5238, 0.5045, 0.4845, 0.4638, 0.4425, 0.4204, 0.3977, 0.3743, 0.3502, 0.3255, 0.3, 0.2739, 0.2471, 0.2196, 0.1914],
	run10Mile: [2640, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9995, 0.9982, 0.9963, 0.9936, 0.9902, 0.9861, 0.9813, 0.9758, 0.9695, 0.9625, 0.9549, 0.9472, 0.9396, 0.9319, 0.9242, 0.9166, 0.9089, 0.9012, 0.8935, 0.8859, 0.8782, 0.8705, 0.8629, 0.8552, 0.8475, 0.8399, 0.8322, 0.8245, 0.8168, 0.8092, 0.8015, 0.7938, 0.7862, 0.7785, 0.7708, 0.7631, 0.7555, 0.7478, 0.7401, 0.7317, 0.7227, 0.713, 0.7026, 0.6915, 0.6797, 0.6673, 0.6542, 0.6403, 0.6258, 0.6106, 0.5947, 0.5782, 0.5609, 0.543, 0.5244, 0.505, 0.485, 0.4644, 0.443, 0.4209, 0.3982, 0.3748, 0.3506, 0.3258, 0.3004, 0.2742, 0.2473, 0.2198, 0.1916],
	run20km: [3315, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9988, 0.9972, 0.9948, 0.9916, 0.9878, 0.9832, 0.9779, 0.9719, 0.9651, 0.9577, 0.9499, 0.9422, 0.9344, 0.9266, 0.9189, 0.9111, 0.9034, 0.8956, 0.8878, 0.8801, 0.8723, 0.8646, 0.8568, 0.849, 0.8413, 0.8335, 0.8258, 0.818, 0.8103, 0.8025, 0.7947, 0.787, 0.7792, 0.7715, 0.7637, 0.7559, 0.7482, 0.7404, 0.7322, 0.7234, 0.7138, 0.7035, 0.6926, 0.6809, 0.6686, 0.6555, 0.6418, 0.6273, 0.6122, 0.5963, 0.5798, 0.5625, 0.5446, 0.5259, 0.5066, 0.4866, 0.4658, 0.4444, 0.4223, 0.3994, 0.3759, 0.3517, 0.3267, 0.3011, 0.2748, 0.2478, 0.2201, 0.1917],
	runHalfMar: [3503, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921],
	run25km: [4205, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921],
	run30km: [5110, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921],
	runMarathon: [7377, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921],
	run50km: [8970, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921],
	run50Mile: [16080, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921],
	run100km: [21360, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921],
	run150km: [36300, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921],
	run100Mile: [39850, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921],
	run200km: [52800, 0.6056, 0.6596, 0.7096, 0.7556, 0.7976, 0.8356, 0.8696, 0.8996, 0.9256, 0.9476, 0.9656, 0.9796, 0.9916, 0.9993, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9973, 0.995, 0.992, 0.9882, 0.9837, 0.9784, 0.9725, 0.9658, 0.9584, 0.9506, 0.9428, 0.935, 0.9273, 0.9195, 0.9117, 0.9039, 0.8961, 0.8884, 0.8806, 0.8728, 0.865, 0.8572, 0.8495, 0.8417, 0.8339, 0.8261, 0.8183, 0.8106, 0.8028, 0.795, 0.7872, 0.7794, 0.7717, 0.7639, 0.7561, 0.7483, 0.7405, 0.7324, 0.7236, 0.714, 0.7038, 0.6929, 0.6813, 0.6689, 0.6559, 0.6422, 0.6277, 0.6126, 0.5968, 0.5802, 0.563, 0.5451, 0.5265, 0.5071, 0.4871, 0.4664, 0.4449, 0.4228, 0.4, 0.3764, 0.3522, 0.3273, 0.3017, 0.2753, 0.2483, 0.2206, 0.1921]
};

var womenEventOptions = {

	run5km: [886, 0.701, 0.7343, 0.7658, 0.7954, 0.8232, 0.8493, 0.8734, 0.8958, 0.9164, 0.9351, 0.952, 0.968, 0.984, 0.996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9977, 0.9959, 0.9935, 0.9906, 0.9871, 0.9831, 0.9785, 0.9734, 0.9678, 0.9616, 0.9549, 0.9476, 0.9398, 0.9314, 0.9225, 0.9131, 0.9034, 0.8937, 0.884, 0.8743, 0.8645, 0.8548, 0.8451, 0.8354, 0.8257, 0.816, 0.8063, 0.7966, 0.7869, 0.7772, 0.7674, 0.7577, 0.748, 0.7383, 0.7286, 0.7189, 0.7092, 0.6995, 0.6898, 0.6801, 0.6703, 0.6606, 0.6509, 0.6412, 0.6315, 0.6218, 0.612, 0.6013, 0.5897, 0.5772, 0.5637, 0.5493, 0.534, 0.5177, 0.5004, 0.4823, 0.4632, 0.4431, 0.4221, 0.4002, 0.3773, 0.3535, 0.3288, 0.3031, 0.2764, 0.2489, 0.2204, 0.1909],
	run6km: [1071, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9977, 0.9958, 0.9933, 0.9904, 0.9868, 0.9827, 0.9781, 0.9728, 0.9671, 0.9608, 0.9539, 0.9465, 0.9385, 0.93, 0.9209, 0.9112, 0.9013, 0.8914, 0.8815, 0.8716, 0.8616, 0.8517, 0.8418, 0.8319, 0.822, 0.8121, 0.8021, 0.7922, 0.7823, 0.7724, 0.7625, 0.7526, 0.7426, 0.7327, 0.7228, 0.7129, 0.703, 0.693, 0.6831, 0.6732, 0.6633, 0.6534, 0.6435, 0.6335, 0.6236, 0.6137, 0.6036, 0.5926, 0.5807, 0.5678, 0.554, 0.5393, 0.5236, 0.507, 0.4894, 0.4709, 0.4515, 0.4311, 0.4098, 0.3875, 0.3643, 0.3402, 0.3151, 0.2891, 0.2621, 0.2342, 0.2054, 0.1756],
	run4Mile: [1152, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9977, 0.9958, 0.9933, 0.9903, 0.9867, 0.9826, 0.9779, 0.9726, 0.9668, 0.9605, 0.9535, 0.946, 0.938, 0.9294, 0.9202, 0.9105, 0.9005, 0.8905, 0.8805, 0.8705, 0.8605, 0.8505, 0.8405, 0.8305, 0.8205, 0.8105, 0.8005, 0.7905, 0.7805, 0.7705, 0.7605, 0.7506, 0.7406, 0.7306, 0.7206, 0.7106, 0.7006, 0.6906, 0.6806, 0.6706, 0.6606, 0.6506, 0.6406, 0.6306, 0.6206, 0.6106, 0.6004, 0.5893, 0.5772, 0.5642, 0.5503, 0.5354, 0.5196, 0.5029, 0.4852, 0.4665, 0.447, 0.4265, 0.405, 0.3826, 0.3593, 0.335, 0.3098, 0.2837, 0.2566, 0.2285, 0.1996, 0.1697],
	run8km: [1442, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9976, 0.9956, 0.9931, 0.99, 0.9864, 0.9821, 0.9773, 0.972, 0.966, 0.9595, 0.9524, 0.9447, 0.9365, 0.9276, 0.9183, 0.9083, 0.8981, 0.8878, 0.8776, 0.8673, 0.8571, 0.8468, 0.8366, 0.8263, 0.8161, 0.8058, 0.7956, 0.7854, 0.7751, 0.7649, 0.7546, 0.7444, 0.7341, 0.7239, 0.7136, 0.7034, 0.6931, 0.6829, 0.6727, 0.6624, 0.6522, 0.6419, 0.6317, 0.6214, 0.6112, 0.6009, 0.5904, 0.5788, 0.5664, 0.553, 0.5387, 0.5234, 0.5072, 0.4901, 0.472, 0.453, 0.433, 0.4121, 0.3903, 0.3675, 0.3438, 0.3191, 0.2935, 0.2669, 0.2395, 0.211, 0.1817, 0.1514],
	run5Mile: [1452, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.999, 0.9976, 0.9956, 0.9931, 0.99, 0.9864, 0.9821, 0.9773, 0.9719, 0.966, 0.9594, 0.9523, 0.9447, 0.9364, 0.9276, 0.9182, 0.9082, 0.898, 0.8877, 0.8775, 0.8672, 0.857, 0.8467, 0.8365, 0.8262, 0.816, 0.8057, 0.7955, 0.7852, 0.775, 0.7647, 0.7545, 0.7442, 0.734, 0.7237, 0.7134, 0.7032, 0.6929, 0.6827, 0.6724, 0.6622, 0.6519, 0.6417, 0.6314, 0.6212, 0.6109, 0.6007, 0.5901, 0.5786, 0.5661, 0.5527, 0.5384, 0.5231, 0.5069, 0.4897, 0.4716, 0.4526, 0.4326, 0.4117, 0.3899, 0.3671, 0.3433, 0.3187, 0.293, 0.2665, 0.239, 0.2106, 0.1812, 0.1509],
	run10km: [1820, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9975, 0.9955, 0.993, 0.9898, 0.986, 0.9817, 0.9768, 0.9713, 0.9652, 0.9585, 0.9512, 0.9433, 0.9349, 0.9259, 0.9162, 0.906, 0.8955, 0.885, 0.8745, 0.864, 0.8535, 0.843, 0.8325, 0.822, 0.8115, 0.801, 0.7905, 0.78, 0.7695, 0.759, 0.7485, 0.738, 0.7275, 0.717, 0.7065, 0.696, 0.6855, 0.675, 0.6645, 0.654, 0.6435, 0.633, 0.6225, 0.612, 0.6015, 0.591, 0.5801, 0.5681, 0.5553, 0.5415, 0.5268, 0.5111, 0.4945, 0.4769, 0.4585, 0.439, 0.4187, 0.3973, 0.3751, 0.3519, 0.3278, 0.3027, 0.2767, 0.2497, 0.2219, 0.193, 0.1633, 0.1325],
	run12km: [2194, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9975, 0.9955, 0.993, 0.9898, 0.986, 0.9817, 0.9768, 0.9713, 0.9652, 0.9585, 0.9512, 0.9433, 0.9349, 0.9259, 0.9162, 0.906, 0.8955, 0.885, 0.8745, 0.864, 0.8535, 0.843, 0.8325, 0.822, 0.8115, 0.801, 0.7905, 0.78, 0.7695, 0.759, 0.7485, 0.738, 0.7275, 0.717, 0.7065, 0.696, 0.6855, 0.675, 0.6645, 0.654, 0.6435, 0.633, 0.6225, 0.612, 0.6015, 0.5908, 0.5792, 0.5667, 0.5533, 0.539, 0.5238, 0.5077, 0.4907, 0.4729, 0.4541, 0.4344, 0.4139, 0.3924, 0.37, 0.3468, 0.3226, 0.2976, 0.2716, 0.2448, 0.2171, 0.1884, 0.1589, 0.1285],
	run15km: [2755, 0.5945, 0.6382, 0.6793, 0.7178, 0.7537, 0.787, 0.8177, 0.8458, 0.8713, 0.8942, 0.9145, 0.9335, 0.9525, 0.9696, 0.9829, 0.9924, 0.9981, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9956, 0.9931, 0.9901, 0.9865, 0.9823, 0.9776, 0.9724, 0.9666, 0.9602, 0.9533, 0.9458, 0.9378, 0.9293, 0.9201, 0.9105, 0.9003, 0.8898, 0.8793, 0.8688, 0.8583, 0.8478, 0.8373, 0.8268, 0.8163, 0.8058, 0.7953, 0.7848, 0.7743, 0.7638, 0.7533, 0.7428, 0.7323, 0.7218, 0.7113, 0.7008, 0.6903, 0.6798, 0.6693, 0.6588, 0.6483, 0.6378, 0.6273, 0.6168, 0.6063, 0.5956, 0.5841, 0.5718, 0.5587, 0.5447, 0.5299, 0.5142, 0.4977, 0.4804, 0.4622, 0.4432, 0.4233, 0.4026, 0.381, 0.3586, 0.3354, 0.3113, 0.2864, 0.2606, 0.234, 0.2065, 0.1782, 0.1491, 0.1191],
	run10Mile: [2961, 0.6525, 0.6924, 0.7301, 0.7656, 0.7989, 0.83, 0.8589, 0.8856, 0.9101, 0.9324, 0.9525, 0.9715, 0.9905, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9956, 0.9931, 0.9901, 0.9865, 0.9823, 0.9776, 0.9724, 0.9666, 0.9602, 0.9533, 0.9458, 0.9378, 0.9293, 0.9201, 0.9105, 0.9003, 0.8898, 0.8793, 0.8688, 0.8583, 0.8478, 0.8373, 0.8268, 0.8163, 0.8058, 0.7953, 0.7848, 0.7743, 0.7638, 0.7533, 0.7428, 0.7323, 0.7218, 0.7113, 0.7008, 0.6903, 0.6798, 0.6693, 0.6588, 0.6483, 0.6378, 0.6273, 0.6168, 0.6063, 0.5954, 0.5837, 0.5713, 0.5579, 0.5438, 0.5288, 0.513, 0.4964, 0.479, 0.4607, 0.4416, 0.4217, 0.401, 0.3794, 0.357, 0.3338, 0.3097, 0.2849, 0.2592, 0.2326, 0.2053, 0.1771, 0.1481, 0.1183],
	run20km: [3700, 0.6525, 0.6924, 0.7301, 0.7656, 0.7989, 0.83, 0.8589, 0.8856, 0.9101, 0.9324, 0.9525, 0.9715, 0.9905, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9956, 0.9931, 0.9901, 0.9865, 0.9823, 0.9776, 0.9724, 0.9666, 0.9602, 0.9533, 0.9458, 0.9378, 0.9293, 0.9201, 0.9105, 0.9003, 0.8898, 0.8793, 0.8688, 0.8583, 0.8478, 0.8373, 0.8268, 0.8163, 0.8058, 0.7953, 0.7848, 0.7743, 0.7638, 0.7533, 0.7428, 0.7323, 0.7218, 0.7113, 0.7008, 0.6903, 0.6798, 0.6693, 0.6588, 0.6483, 0.6378, 0.6273, 0.6168, 0.606, 0.5945, 0.5823, 0.5692, 0.5554, 0.5408, 0.5255, 0.5093, 0.4924, 0.4747, 0.4563, 0.4371, 0.4171, 0.3963, 0.3748, 0.3525, 0.3294, 0.3055, 0.2809, 0.2555, 0.2293, 0.2023, 0.1746, 0.1461, 0.1169],
	runHalfMar: [3912, 0.5945, 0.6382, 0.6793, 0.7178, 0.7537, 0.787, 0.8177, 0.8458, 0.8713, 0.8942, 0.9145, 0.9335, 0.9525, 0.9696, 0.9829, 0.9924, 0.9981, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9956, 0.9931, 0.9901, 0.9865, 0.9823, 0.9776, 0.9724, 0.9666, 0.9602, 0.9533, 0.9458, 0.9378, 0.9293, 0.9201, 0.9105, 0.9003, 0.8898, 0.8793, 0.8688, 0.8583, 0.8478, 0.8373, 0.8268, 0.8163, 0.8058, 0.7953, 0.7848, 0.7743, 0.7638, 0.7533, 0.7428, 0.7323, 0.7218, 0.7113, 0.7008, 0.6903, 0.6798, 0.6693, 0.6588, 0.6483, 0.6378, 0.6273, 0.6168, 0.6059, 0.5942, 0.5818, 0.5687, 0.5548, 0.5401, 0.5246, 0.5084, 0.4915, 0.4738, 0.4553, 0.436, 0.416, 0.3953, 0.3738, 0.3515, 0.3284, 0.3046, 0.2801, 0.2548, 0.2287, 0.2018, 0.1742, 0.1459, 0.1168],
	run25km: [4665, 0.6525, 0.6924, 0.7301, 0.7656, 0.7989, 0.83, 0.8589, 0.8856, 0.9101, 0.9324, 0.9525, 0.9715, 0.9905, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9997, 0.9989, 0.9975, 0.9955, 0.993, 0.9899, 0.9863, 0.9821, 0.9774, 0.972, 0.9662, 0.9597, 0.9528, 0.9452, 0.9371, 0.9284, 0.9192, 0.9094, 0.8991, 0.8885, 0.8778, 0.8672, 0.8566, 0.846, 0.8354, 0.8247, 0.8141, 0.8035, 0.7929, 0.7822, 0.7716, 0.761, 0.7504, 0.7398, 0.7291, 0.7185, 0.7079, 0.6973, 0.6866, 0.676, 0.6654, 0.6548, 0.6441, 0.6335, 0.6229, 0.6123, 0.6011, 0.5891, 0.5764, 0.5629, 0.5486, 0.5335, 0.5177, 0.5011, 0.4838, 0.4657, 0.4468, 0.4271, 0.4067, 0.3855, 0.3635, 0.3407, 0.3172, 0.293, 0.2679, 0.2421, 0.2155, 0.1881, 0.16, 0.1311, 0.1014],
	run30km: [5660, 0.6525, 0.6924, 0.7301, 0.7656, 0.7989, 0.83, 0.8589, 0.8856, 0.9101, 0.9324, 0.9525, 0.9715, 0.9905, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9975, 0.9954, 0.9928, 0.9895, 0.9857, 0.9813, 0.9762, 0.9706, 0.9643, 0.9575, 0.95, 0.942, 0.9333, 0.9241, 0.9142, 0.9038, 0.893, 0.8822, 0.8715, 0.8607, 0.85, 0.8392, 0.8285, 0.8177, 0.807, 0.7962, 0.7855, 0.7747, 0.764, 0.7532, 0.7424, 0.7317, 0.7209, 0.7102, 0.6994, 0.6887, 0.6779, 0.6672, 0.6564, 0.6457, 0.6349, 0.6241, 0.6133, 0.6018, 0.5894, 0.5763, 0.5625, 0.5478, 0.5323, 0.5161, 0.4991, 0.4813, 0.4628, 0.4434, 0.4233, 0.4024, 0.3807, 0.3583, 0.335, 0.311, 0.2862, 0.2606, 0.2342, 0.2071, 0.1792, 0.1504, 0.121, 0.0907],
	runMarathon: [8125, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592],
	run50km: [9820, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592],
	run50Mile: [17760, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592],
	run100km: [23591, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592],
	run150km: [39700, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592],
	run100Mile: [43500, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592],
	run200km: [57600, 0.693, 0.7263, 0.7578, 0.7874, 0.8152, 0.8413, 0.8654, 0.8878, 0.9084, 0.9271, 0.944, 0.96, 0.976, 0.9893, 0.9973, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9998, 0.9989, 0.9974, 0.9953, 0.9926, 0.9893, 0.9854, 0.9808, 0.9757, 0.9699, 0.9635, 0.9565, 0.9489, 0.9406, 0.9318, 0.9223, 0.9122, 0.9016, 0.8906, 0.8796, 0.8686, 0.8576, 0.8466, 0.8356, 0.8246, 0.8136, 0.8026, 0.7916, 0.7806, 0.7696, 0.7586, 0.7476, 0.7366, 0.7256, 0.7146, 0.7036, 0.6926, 0.6816, 0.6706, 0.6596, 0.6486, 0.6376, 0.6266, 0.6156, 0.6042, 0.592, 0.579, 0.5652, 0.5506, 0.5352, 0.519, 0.502, 0.4842, 0.4656, 0.4462, 0.426, 0.405, 0.3832, 0.3606, 0.3372, 0.313, 0.288, 0.2622, 0.2356, 0.2082, 0.18, 0.151, 0.1212, 0.0906, 0.0592]
};


// This function rounds to the nearest 100th.

function numRound (value,dec){

    value=Math.floor(value * dec + 0.05) / dec;
    return(value);
}

// Setting up Age Grade controller.

angular.module('runnerCalcApp')
  .controller('MainCtrl', function ($scope) {

  	angular.element(document).ready(function () {

  		// Populating the dropdown menu that selects the event.

	  	$scope.run = '';
	  	$scope.list = [
		    {
		      Event: 'run5km',
		      Title: '5 km'
		    }, {
		      Event: 'run6km',
		      Title: '6 km'
		    }, {
		      Event: 'run4Mile',
		      Title: '4 mile'
		    }, {
		      Event: 'run8km',
		      Title: '8 km'
		    }, {
		      Event: 'run5Mile',
		      Title: '5 mile'
		    }, {
		      Event: 'run10km',
		      Title: '10 km'
		    }, {
		      Event: 'run12km',
		      Title: '12 km'
		    }, {
		      Event: 'run15km',
		      Title: '15km'
		    }, {
		      Event: 'run10Mile',
		      Title: '10 mile'
		    }, {
		      Event: 'run20km',
		      Title: '20 km'
		    }, {
		      Event: 'runHalfMar',
		      Title: 'half mar'
		    }, {
		      Event: 'run25km',
		      Title: '25 km'
		    }, {
		      Event: 'run30km',
		      Title: '30 km'
		    }, {
		      Event: 'runMarathon',
		      Title: 'marathon'
		    }, {
		      Event: 'run50km',
		      Title: '50 km'
		    }, {
		      Event: 'run50Mile',
		      Title: '50 mile'
		    }, {
		      Event: 'run100km',
		      Title: '100 km'
		    }, {
		      Event: 'run150km',
		      Title: '150 km'
		    }, {
		      Event: 'run100Mile',
		      Title: '100 mile'
		    }, {
		      Event: 'run200km',
		      Title: '200 km'
		    }
		];

		// Scope for the debug button. This button is mainly used to log to the console.

		$scope.debugButton = function() {

			console.log(calcBtnDisabled1);
			console.log(calcBtnDisabled2);
			console.log(calcBtnDisabled3);
			console.log(calcBtnDisabled4);

			console.log($scope.genCheck);
			console.log($scope.inputAge);

		};


		var outputAgeGrade = $(".outputAgeGrade");
		var errWarning = $('.errWarning');
	  	errWarning.hide();
	  	

	  	$scope.hideTextCheck = "Static";

	  	// This controls the ng-show on the animated info text on AgeGradeMain.

		$scope.changeHideTextCheck = function() {
			$scope.hideTextCheck = !$scope.hideTextCheck;
		};


		// The following four functions check for missing info on 
		// the age input, distance/event dropdown menu,
		// gender selection, and time input, respectively. If any missing
		// info is found, true or false is returned and an error span
		// is shown to the user. 
		
		var calcBtnDisabled1 = false;
		var calcBtnDisabled2 = false;
		var calcBtnDisabled3 = false;
		var calcBtnDisabled4 = false;

		
		
		$scope.updateInputAge = function() {
			if ($scope.inputAge === "") {
				return true;
			} else {
				calcBtnDisabled1 = false;
				return false;
			}
	  	};

	  	$scope.updateInputDist = function() {
	  		if ($scope.inputDist === "") {
				return true;
			} else {
				calcBtnDisabled2 = false;
				return false;
			}
	  	};

	  	$scope.updateGenCheck = function() {
	  		if ($scope.genCheck === false || $scope.genCheck === undefined) {
	    		$scope.genCheckErr = true;
	    		return true;
	    	} else {
	    		calcBtnDisabled3 = false;
	    		$scope.genCheckErr = false;
	    		return false;
	    	}
	  	};

	  	$scope.updateInputTime = function() {

	  		if (parseInt($scope.inputTime1 + $scope.inputTime2 + $scope.inputTime3) === 0) {
	  			$scope.inputTimeErr = true;
	  			return true;
	    	} else {
	    		calcBtnDisabled4 = false;
	    		$scope.inputTimeErr = false;
	    		return false;
	    	}
	  	};


	  	$scope.updateBtnDisabled = function() {

	  		if (calcBtnDisabled1 === false && calcBtnDisabled2 === false && calcBtnDisabled3 === false && calcBtnDisabled4 === false) {
	  			$scope.calcBtnDisabled = false;
	  			errWarning.fadeOut(2000);
	  		}

	  	};

	  	// The following six functions control the responsiveness of
	  	// the three time input fields, changing the value of the text boxes
	  	// depending upon blur or focus. 

	  	$scope.inputTime1 = '00';
	  	$scope.inputTime2 = '00';
	  	$scope.inputTime3 = '00';

	  	$scope.timeInput1Focus = function () {
	  		if ($scope.inputTime1 === '00') {
	  			$scope.inputTime1 = '';
	  		}
	  	};

	  	$scope.timeInput1Blur = function () {
	  		if ($scope.inputTime1 === '') {
	  			$scope.inputTime1 = '00';
	  		}
	  	};

	  	$scope.timeInput2Focus = function () {
	  		if ($scope.inputTime2 === '00') {
	  			$scope.inputTime2 = '';
	  		}
	  	};

	  	$scope.timeInput2Blur = function () {
	  		if ($scope.inputTime2 === '') {
	  			$scope.inputTime2 = '00';
	  		}
	  	};

	  	$scope.timeInput3Focus = function () {
	  		if ($scope.inputTime3 === '00') {
	  			$scope.inputTime3 = '';
	  		}
	  	};

	  	$scope.timeInput3Blur = function () {
	  		if ($scope.inputTime3 === '') {
	  			$scope.inputTime3 = '00';
	  		}
	  	};

	  	

	  	// This allows the stack icon button to
	  	// hide and show the main text section on
	  	// age grade main. 
	  	
	  	var textVisible = false;

	  	$scope.stackButton = function (){

	  		textVisible = !textVisible;

	  		if (textVisible === true) {
	  			return true;
	  		} else {
	  			return false;
	  		}


	  	};

	  	// Fades out the error warning div that
	  	// appears below the calculator when info is missing. This is called by
	  	// the error functions above.

	  	var hideErrWhenFilled = function() {

	  		errWarning.fadeOut(3000);
	  	};


	  	// Initially enables the calc button
	  	
	  	$scope.calcBtnDisabled = false;

	  	// Click function of the calculate button.
	  	
	  	$scope.calcButton = function (){

	  		$scope.calcBtnDisabled = true;

	  		// Converting the time input fields to int because
	  		// they are strings by default.

	  		var timeInput1 = parseInt($scope.inputTime1, 10);
		    var timeInput2 = parseInt($scope.inputTime2, 10);
		    var timeInput3 = parseInt($scope.inputTime3, 10);

		    // Multiplying the left (timeInput1) and middle (timeInput2) input fields so
		    // that all fields have the unit of seconds. 
		    // They are then added together for the full time. 
		     
		    var timeInput1Adjusted = (timeInput1 * 60) * 60;
		    var timeInput2Adjusted = timeInput2 * 60;
		    var totalTimeInput = timeInput1Adjusted + timeInput2Adjusted + timeInput3;

		    // Checks if the input fields have been filled properly, and
		    // chooses the running event data array that corresponds to the info given.

		    var chosenOption = 0;
		    if ($scope.genCheck === "Male" && $scope.inputDist !== undefined) {
	  			chosenOption = menEventOptions[$scope.inputDist];
	  		} else if ($scope.genCheck === "Female" && $scope.inputDist !== undefined) {
	  			chosenOption = womenEventOptions[$scope.inputDist];
	  		} else {
	  			chosenOption = 0;
	  		}

	  		// The If statement below checks if there are any missing
	  		// values in the input fields, and if not, does an age graded calculation on
	  		// those values. The calculation is done by multiplying the age-graded index score
	  		// in the data above by the user's input time. This number is then converted from
	  		// seconds to the hh:mm:ss notation and shown to the user. 

	  		var ageInt = parseInt($scope.inputAge);
	  		var ageGrade = 0;
	  		var ageGradePercent = 0;
	  		var returnAgeGrade = 0;
	  		
      		if (ageInt % 1 === 0 && ageInt !== "" && isNaN(ageInt) === false && chosenOption !== undefined &&
      		chosenOption !== 0 && totalTimeInput !== 0 && $scope.inputDist !== undefined) {

      			ageGrade = chosenOption[ageInt-4] * numRound(totalTimeInput, 100);
        		ageGradePercent = chosenOption[0] / ageGrade;
		        returnAgeGrade = (new Date(ageGrade * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
		        $scope.outputAgeGrade = returnAgeGrade;
		        $scope.outputAgePercent = numRound((ageGradePercent * 100), 100) + '%';
		        
      		}

	    	// Normalizes the different values in the age and distance input fields

	    	if ($scope.inputAge % 1 !== 0) {
	    		$scope.inputAge = "";
	    		calcBtnDisabled1 = true;
	    	} 

	    	if ($scope.inputDist === undefined) {
	    		$scope.inputDist = "";
	    		calcBtnDisabled2 = true;
	    	} 

	    	// Checks for missing values in the input
	    	// fields and shows error divs and red outlines
	    	// if any are missing
	   
	    	if (totalTimeInput === 0 || totalTimeInput === undefined) {
	    		$scope.inputTimeErr = true;
	    		calcBtnDisabled4 = true;
	    	} else {
	    		$scope.inputTimeErr = false;
	    	}

	    	if ($scope.genCheck === false || $scope.genCheck === undefined) {
	    		$scope.genCheckErr = true;
	    		calcBtnDisabled3 = true;
	    	} else {
	    		$scope.genCheckErr = false;
	    	}

	    	// Fades in the error div if any of the errors are true.
	    	
	    	if ($scope.updateInputAge() === true || $scope.updateInputTime() === true || 
	    		$scope.updateInputDist() === true || $scope.updateGenCheck() === true) {
	    		errWarning.fadeIn(500);
	    	} else {
	    		errWarning.fadeOut(2000);
	    	}

	    	if ($scope.outputAgeGrade !== undefined) {
	    		outputAgeGrade.fadeIn(100);
	    	}

	  	};

	  	// Clear button click function.

	  	$scope.clearButton = function (){

	  		// Resets a bunch of elements to their default
	  		// values and hides some other elements. 

	  		$scope.inputAge = undefined;
	  		$scope.inputDist = undefined;
	  		$scope.outputAgeGrade = undefined;
	  		$scope.outputAgePercent = undefined;
	  		$scope.inputTime1 = '00';
	  		$scope.inputTime2 = '00';
	  		$scope.inputTime3 = '00';
	  		$scope.inputTimeErr = false;
	  		$scope.genCheckErr = false;
	  		$scope.genCheck = false;

	  		calcBtnDisabled1 = false;
	  		calcBtnDisabled2 = false;
	  		calcBtnDisabled3 = false;
	  		calcBtnDisabled4 = false;

	  		errWarning.fadeOut(2000);

	  	};

  	});


  });